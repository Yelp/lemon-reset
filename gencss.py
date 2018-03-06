"""Pass a reset css as stdin to be rewritten"""
import re
import sys


def _replace(s, to_remove):
    assert to_remove in s, (to_remove, s)
    return s.replace(to_remove, '')


def main():
    contents = sys.stdin.read()
    # don't style body / html
    contents = _replace(contents, 'html, body, ')
    contents = _replace(contents, 'body {\n\tline-height: 1;\n}\n')
    # meyer-reset has trailing whitespace :'(
    contents = contents.replace(' \n', '\n')
    # replace with our classname
    contents = re.sub('([a-z0-9:]+(,| {))', r'.lemon--\1', contents)

    sys.stdout.write(contents)


if __name__ == '__main__':
    exit(main())
