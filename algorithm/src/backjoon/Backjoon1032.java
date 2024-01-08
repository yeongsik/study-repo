package backjoon;
/*
https://www.acmicpc.net/problem/1032
 */

import java.io.*;
import java.util.LinkedList;
import java.util.Queue;

public class Backjoon1032 {

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int n = Integer.parseInt(br.readLine());

        Queue<Character> queue = new LinkedList<>();

        for (int i = 0; i < n; i++) {
            String s = br.readLine();

            if (queue.isEmpty()) {
                char[] charArray = s.toCharArray();
                for (char c : charArray) {
                    queue.add(c);
                }
            } else {
                char[] charArray = s.toCharArray();
                for (char c : charArray) {
                    char poll = queue.poll();
                    if (poll == '?') {
                        queue.add('?');
                        continue;
                    }
                    if (poll != c) {
                        queue.add('?');
                    } else {
                        queue.add(c);
                    }
                }
            }
        }

        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        while (!queue.isEmpty()) {
            bw.write(queue.poll());
        }

        bw.flush();
        bw.close();
    }

}
